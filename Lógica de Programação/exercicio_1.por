programa
{
	
	funcao inicio()
	{
	
		inteiro salarioFixo = 500
		inteiro programasVendidos = -1
		
		escreva("Digite a quantidade de programas que você vendeu este mês:")
		
		enquanto (programasVendidos < 0)
			leia(programasVendidos)
			
		inteiro bonus = programasVendidos * 50
		escreva("Você receberá R$ " + bonus + " de bônus este mês totalizando: " + (bonus + salarioFixo))
		
	}
	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 15; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */