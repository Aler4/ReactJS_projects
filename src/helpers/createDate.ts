export const  createDate = () => {
    let date = new Date();
    let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    let month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
    return `${day}/${month}/${date.getFullYear()}`;
}