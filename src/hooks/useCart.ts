import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { getSessionId, CartItem } from '@/lib/cart';
import { useToast } from '@/hooks/use-toast';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const sessionId = getSessionId();

  const fetchCart = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('cart_items')
        .select(`
          id,
          product_id,
          quantity,
          message_card,
          include_vase,
          delivery_date,
          products (
            id,
            name,
            price,
            image_url
          )
        `)
        .eq('session_id', sessionId);

      if (error) throw error;

      const cartItems = (data || []).map((item: any) => ({
        ...item,
        product: item.products,
      }));

      setItems(cartItems);
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setLoading(false);
    }
  }, [sessionId]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const addToCart = async (
    productId: string,
    quantity: number = 1,
    options?: { messageCard?: string; includeVase?: boolean; deliveryDate?: string }
  ) => {
    try {
      // Check if item already exists
      const existingItem = items.find((item) => item.product_id === productId);

      if (existingItem) {
        // Update quantity
        const { error } = await supabase
          .from('cart_items')
          .update({ quantity: existingItem.quantity + quantity })
          .eq('id', existingItem.id);

        if (error) throw error;
      } else {
        // Add new item
        const { error } = await supabase.from('cart_items').insert({
          session_id: sessionId,
          product_id: productId,
          quantity,
          message_card: options?.messageCard,
          include_vase: options?.includeVase || false,
          delivery_date: options?.deliveryDate,
        });

        if (error) throw error;
      }

      await fetchCart();
      setIsOpen(true);
      toast({
        title: "Added to cart! 🌸",
        description: "Your flowers are waiting for you.",
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast({
        title: "Oops!",
        description: "Couldn't add to cart. Please try again.",
        variant: "destructive",
      });
    }
  };

  const updateQuantity = async (itemId: string, quantity: number) => {
    try {
      if (quantity <= 0) {
        await removeFromCart(itemId);
        return;
      }

      const { error } = await supabase
        .from('cart_items')
        .update({ quantity })
        .eq('id', itemId);

      if (error) throw error;
      await fetchCart();
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const removeFromCart = async (itemId: string) => {
    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('id', itemId);

      if (error) throw error;
      await fetchCart();
      toast({
        title: "Removed from cart",
        description: "Item has been removed.",
      });
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const clearCart = async () => {
    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('session_id', sessionId);

      if (error) throw error;
      setItems([]);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  const subtotal = items.reduce((sum, item) => {
    const price = item.product?.price || 0;
    const vasePrice = item.include_vase ? 12.99 : 0;
    return sum + (price + vasePrice) * item.quantity;
  }, 0);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return {
    items,
    loading,
    isOpen,
    setIsOpen,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    itemCount,
    refetch: fetchCart,
  };
}
