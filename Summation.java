import java.util.Scanner;

public class Summation {

  public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);

    System.out.println("Quantos números deseja somar? ");
    int length = sc.nextInt();
    int summation = 0;

    int[] totalNumbers = new int[length];

    for (int i = 0; i < length; i++) {
      System.out.println("Digite um número que seja somar: ");
      totalNumbers[i] = sc.nextInt();
    }
    for (int j = 0; j < totalNumbers.length; j++) {
      summation = summation + totalNumbers[j];
    }
    System.out.println(
      "A soma total dos números inseridos foi de: " + summation
    );
  }
}
