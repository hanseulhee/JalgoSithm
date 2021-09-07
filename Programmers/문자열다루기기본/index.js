const solution = (s) => {
  if (s.length !== 4 && s.length !== 6) return false;
  
  if (s == parseInt(s)) return true;
    return false;
};