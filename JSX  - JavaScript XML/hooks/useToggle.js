function useToggle(init = false) {
  const [initialValue, setValue] = useState(init);

  // Define and memorize toggler function,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setValue((prevState) => !prevState), []);

  return [initialValue, toggle];
}
