export default function printNumbers(n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        result += i + ' ';
    }
    return result.trim(); // Retirer l'espace supplémentaire à la fin
}