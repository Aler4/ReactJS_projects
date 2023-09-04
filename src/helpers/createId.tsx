export const createId = () => {
    let alph = 'abcdefghiklmnopqrstvwxyz';
    let number = Math.round(Math.random() * 100);
    let id = '';
    for (let i = 0; i <=3; i++) {
        id+= alph[Math.round(Math.random() * alph.length)];
    }
    id += number;
    return id;
}