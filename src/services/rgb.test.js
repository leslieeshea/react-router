import { hexFromRGB, hexFromColor } from './rgb';

describe('RGB converter', () => {
  it('takes rgb values and return hex values', () => {
    const rgb = {
      red: 255,
      green: 0,
      blue: 0
    };

    expect(hexFromRGB(rgb)).toEqual('#FF0000');
  });

  it('takes a hex value and returns a decimal', () => {
    expect(hexFromColor(170)).toEqual('AA');
  });
});
