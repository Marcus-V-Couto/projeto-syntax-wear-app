export function isValidCPF(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  if (digits.length !== 11) return false;
  if (/^(\d)\1+$/.test(digits)) return false;

  const calcDigit = (base: string, factor: number) => {
    let total = 0;
    for (let i = 0; i < base.length; i += 1) {
      total += Number(base[i]) * (factor - i);
    }
    const mod = total % 11;
    return mod < 2 ? 0 : 11 - mod;
  };

  const baseNine = digits.slice(0, 9);
  const digit1 = calcDigit(baseNine, 10);
  const baseTen = digits.slice(0, 10);
  const digit2 = calcDigit(baseTen, 11);

  return digits === `${baseNine}${digit1}${digit2}`;
}