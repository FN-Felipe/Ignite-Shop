import { X } from '@phosphor-icons/react';
import Image from 'next/image'
import { BagProps } from '../types/Bag';
import { BagBody, BagClose, BagContainer, BagContent, BagFooter, BagHeader, ImageSample, ProductSample } from '../styles/components/BagStyle';
import { useContext, useState } from 'react'
import axios from 'axios';
import { ProductContext } from '../context/ProductContext';
import { uuid } from 'uuidv4';

export function Bag({ closeNav, navOpen }: BagProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { productState, removeProductToBag, totalValue } = useContext(ProductContext)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        productState
      })

      console.log(response.data)

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl

    } catch (error) {
      alert('Falha ao redirecionar ao checkout')

      setIsCreatingCheckoutSession(false)
    }
  }

  if (!productState) return <></>

  return (
    <div>
      <BagContent style={{ width: navOpen ? '25rem' : 0 }}>
        <>
          <BagContainer>
            <BagClose onClick={closeNav}>
              <X size={20} weight="bold" />
            </BagClose>
            <BagHeader>
              <h3>Sacola de compras</h3>
            </BagHeader>
            <BagBody>
              {productState?.map(item => (
                <ProductSample key={uuid()}>
                  <ImageSample>
                    <Image src={item.imageUrl} width={80} height={60} alt='' />
                  </ImageSample>
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.price}</span>
                    <p onClick={() => removeProductToBag(item)}>Remover</p>
                  </div>
                </ProductSample>
              ))}
            </BagBody>
          </BagContainer>
          <BagFooter>
            <div>
              <span>Quantidade</span>
              {productState.length <= 1 ? (
                <span>{productState.length} item</span>
              ) :
                <span>{productState.length} itens</span>
              }
            </div>
            <div>
              <span>Valor total</span>
              <h3>R$ {String(parseFloat(String(totalValue)).toFixed(2)).replace(".", ",")}</h3>
            </div>
            <button onClick={handleBuyProduct} disabled={isCreatingCheckoutSession || productState.length < 1}>Finalizar compra</button>
          </BagFooter>
        </>
      </BagContent>
    </div>
  )
}