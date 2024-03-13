//truncate quotes if text is more than 15 chars
export const truncateLongWords=(word: string): string=> {
  const truncateLength = 25
  const words = word.split(' ');
  if (words.length > truncateLength) {
      return words.slice(0, truncateLength).join(' ') + '...';
  } else {
      return word;
  }
}
  
    const months: string[] = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];
//properly formats date string
 export const convertDate = (inputDate: string): string=> {


    const [year, month, day] = inputDate.split("-");
    const formattedDate = `${parseInt(day)} ${months[parseInt(month) - 1]} ${parseInt(year)}`;

    return formattedDate;
}

export const  convertDateToString = (date:Date | undefined):string=>{
    if(date){
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed, so we add 1
      const day = date.getDate().toString().padStart(2, '0');
      return `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`;
    }else{
      return "All"
    }
}
