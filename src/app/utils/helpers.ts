export const isIncludedList = (str: string, strList: string[]): boolean => {
  return strList.includes(str);
};

export const isListEmpty = (strList: string[]): boolean => {
  return strList.length == 0;
};
