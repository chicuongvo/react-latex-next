import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

export default function Home() {
  return (
    <>
      <h1>Những công thức toán học:</h1>
      <p>
        <Latex>
          {`
          Phương trình bậc hai có dạng:
          \\[
          ax^2 + bx + c = 0
          \\]
          Công thức nghiệm của phương trình bậc hai là:
          \\[
          x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}
          \\]


          Công thức đạo hàm của một hàm số $f(x)$ là:
          \\[
          f'(x) = \\lim_{\\Delta x \\to 0} \\frac{f(x + \\Delta x) - f(x)}{\\Delta x}
          \\]
          Ví dụ, đạo hàm của hàm số $f(x) = x^2$ là:
          \\[
          f'(x) = 2x
          \\]

          Tích phân là một khái niệm trong giải tích:
          \\[
          \\int_a^b f(x) \\, dx
          \\]
          Ví dụ, tích phân của hàm số $f(x) = x^2$ từ 0 đến 1 là:
          \\[
          \\int_0^1 x^2 \\, dx = \\frac{1}{3}
          \\]


          Trong tam giác vuông, định lý Pythagore nói rằng:
          $a^2 + b^2 = c^2$
          trong đó $a$ và $b$ là độ dài của hai cạnh góc vuông, và $c$ là độ dài của cạnh huyền.`}
        </Latex>
        <br />
        <Latex>
          {` Công thức Euler là một trong những công thức nổi tiếng nhất trong toán học:
            \\[
            e^{i\\pi} + 1 = 0
            \\]
  
  
            Chuỗi Taylor của một hàm số $f(x)$ quanh điểm $x = a$ là:
            \\[
            f(x) = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\cdots
            \\] `}
        </Latex>
      </p>
    </>
  );
}
