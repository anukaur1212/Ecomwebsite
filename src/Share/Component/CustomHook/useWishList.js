import React, { useState } from 'react'

export const useWishList = ({like,setLike}) => {

  const Liketoggle = (item) => {
    setLike(prev => {
      const updatedWishlist = prev.some(items => items.id === item.id)
        ? prev.filter(items => items.id !== item.id)
        : [...prev, item]

        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

      return updatedWishlist;
    })
  }

  return {like, Liketoggle }
}
export default useWishList;







