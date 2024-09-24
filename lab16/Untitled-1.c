#include <stdio.h>

int main(void) {
    char ch, url[] = "secretFile.txt";
    FILE *fp;

    fp = fopen(url, "r");

    if (fp == NULL) {
        printf("Não foi possível abrir o arquivo");
        return 1;
    }

    while ((ch = fgetc(fp)) != EOF)
        putchar(ch);

    fclose(fp);
    return 0;
}
