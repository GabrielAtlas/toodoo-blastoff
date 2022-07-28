programa
{
	
	funcao inicio()
	{
		real saldo, cheque

		escreva("Digite o saldo inicial do cliente:")
		leia(saldo)

		escreva("Digite o valor do cheque:")
		faca{
			leia(cheque)
		}enquanto(cheque <= 0)

		se(saldo >= cheque){
			saldo -= cheque
			escreva("Cheque descontado de sua conta com sucesso.")
			escreva("\nSeu novo saldo agora é de R$" + saldo)
		}senao{
			escreva("Você não tem saldo suficiente para este cheque ser descontado")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 234; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */