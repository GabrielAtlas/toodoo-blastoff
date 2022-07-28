programa
{
	
	funcao inicio()
	{
		real kmInicial, kmFinal, totalGasolina

		escreva("Digite a KM Inicial:")
		faca{
			leia(kmInicial)
		}enquanto(kmInicial < 0)

		escreva("Digite a KM Final:")
		faca{
			leia(kmFinal)
		}enquanto(kmFinal < 0)

		escreva("Digite a quantidade de gasolina:")
		faca{
			leia(totalGasolina)
		}enquanto(totalGasolina < 0)

		real resultado = (kmFinal - kmInicial) / totalGasolina

		escreva("Média de KM/L gasto: " + resultado)

		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 465; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */