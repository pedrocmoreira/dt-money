import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { z } from "zod";

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>


        <CloseButton>
        <X size={24}/>
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypeButton variant='income' value='income'>
              Entrada
              <ArrowCircleUp size={24}/>
            </TransactionTypeButton>

            <TransactionTypeButton variant='outcome' value='outcome'>
              Saída
              <ArrowCircleDown size={24}/>
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">
            Cadastrar
          </button>
        </form>


      </Content>
    </Dialog.Portal>
  )
}