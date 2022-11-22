import java.util.Scanner;

public class GreatestCommonDivisor {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int numberOne, numberTwo, bigger, GCD;

    GCD = 1;

    System.out.println("Máximo Divisor Comum entre dois números:");
    System.out.print("Digite o primeiro número: ");
    numberOne = sc.nextInt();

    System.out.print("Digite o segundo número: ");
    numberTwo = sc.nextInt();

    int valueFinalOne = numberOne;
    int valueFinalTwo = numberTwo;

    bigger = numberOne;
    if (numberOne > numberTwo) {
      bigger = numberOne;
    } else if (numberOne < numberTwo) {
      bigger = numberTwo;
    } else {
      System.out.println("Os números são iguais!");
    }

    for (int i = 2; i <= bigger; i++) {
      while ((numberOne % i == 0) && (numberTwo % i == 0)) {
        numberOne = numberOne / i;
        numberTwo = numberTwo / i;

        GCD = GCD * i;
      }
    }
    System.out.println(
      "MDC (" + valueFinalOne + "," + valueFinalTwo + ") = " + GCD
    );
  }
}
