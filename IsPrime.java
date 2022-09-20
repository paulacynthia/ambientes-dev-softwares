import java.util.Scanner;

public class IsPrime {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        boolean isPrime = true;

            System.out.println("Digite o número que deseja saber " +
                    "se é primo ou não: ");
            int number = sc.nextInt();

            for (int j = 2; j < number; j++) {
                if (number % j == 0) {
                    System.out.println(number + " não é um número primo");
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) System.out.println(number + " é um número primo");
            isPrime = true;
        }
    }
