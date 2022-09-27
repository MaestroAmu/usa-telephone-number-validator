function telephoneCheck(str) {

    const patterns = [
      /^\d{3}-\d{3}-\d{4}$/,
      /^1 \d{3}-\d{3}-\d{4}$/,
      /^1 \(\d{3}\) \d{3}-\d{4}$/,
      /^\d{10}$/,
      /^\(\d{3}\)\d{3}-\d{4}$/,
      /^1 \d{3} \d{3} \d{4}$/,
      /1\(\d{3}\)\d{3}-\d{4}/
    ];
  
    return patterns.some(pattern => pattern.test(str));
}