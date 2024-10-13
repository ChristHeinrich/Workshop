class Lock {
    private correctCode: number;
    private attemptsLeft: number = 5;

    constructor(correctCode: number) {
        this.correctCode = correctCode;
    }

    checkCode(playerCode: number): string {
        if (this.attemptsLeft === 0) {
            return 'Keine Versuche mehr übrig!';
        }

        if (playerCode < 1000 || playerCode > 9999) {
            return 'Ungültiger Code. Bitte gib einen vierstelligen Code ein.';
        }

        this.attemptsLeft--;

        if (playerCode === this.correctCode) {
            return 'Schloss geöffnet!';
        } else if (this.attemptsLeft > 0) {
            return `Falscher Code. Du hast noch ${this.attemptsLeft} Versuch(e).`;
        } else {
            return 'Keine Versuche mehr übrig!';
        }
    }

    getAttemptsLeft(): number {
        return this.attemptsLeft;
    }
}
