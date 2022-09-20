import java.util.Scanner;

public class Score {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Contador");
        System.out.println("----------------------------");
        System.out.println("Você quer contar até quanto?");
        int score = sc.nextInt();
        System.out.println("Contando...");
        for(int j = 1; j <= score; j++) {
            System.out.print(j + " ");
        }
        System.out.println("Terminei de contar!");
    }
}
