import java.util.Scanner;

public class Fibonacci {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("Digite quantos termos deseja ver: ");
    int length = sc.nextInt();

    int a = 0;
    int b = 1;

    for (int cont = 0; cont < length; cont++) {
      System.out.print(a + " ");
      int aux = a + b;
      a = b;
      b = aux;
    }
  }
}
