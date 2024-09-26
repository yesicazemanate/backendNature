export const sorteo =(data)=>{
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
}