function checkAge(age) {
    let _age = Number(age)
    if (_age < 18) return 'Vous êtes mineur.';
    if (_age >= 18 && _age < 65) return 'Vous êtes majeur.';
    if (_age >= 65) return 'Vous êtes senior.';
}

export default checkAge;
