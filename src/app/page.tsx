import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

export default function Home() {
  return (
    <>
      <h1>Những công thức toán học:</h1>
      <p>
        Phương trình bậc hai có dạng:
        <Latex>{`$$ax^2 + bx + c = 0$$`}</Latex>
        Công thức nghiệm của phương trình bậc hai là:
        <Latex>{`$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$`}</Latex>
        Công thức đạo hàm của một hàm số <Latex>{`$f(x)$`}</Latex> là:
        <Latex>{`$$f'(x) = \\lim_{\\Delta x \\to 0} \\frac{f(x + \\Delta x) - f(x)}{\\Delta x}$$`}</Latex>
        Ví dụ, đạo hàm của hàm số <Latex>{`$f(x) = x^2$`}</Latex> là:
        <Latex>{`$$f'(x) = 2x$$`}</Latex>
        Tích phân là một khái niệm trong giải tích:
        <Latex>{`$$\\int_a^b f(x) \\, dx$$`}</Latex>
        Ví dụ, tích phân của hàm số <Latex>{`$f(x) = x^2$`}</Latex> từ 0 đến 1
        là:
        <Latex>{`$$\\int_0^1 x^2 \\, dx = \\frac{1}{3}$$`}</Latex>
        Trong tam giác vuông, định lý Pythagore nói rằng:
        <Latex>{`$a^2 + b^2 = c^2$`}</Latex>
        trong đó $a$ và $b$ là độ dài của hai cạnh góc vuông, và $c$ là độ dài
        của cạnh huyền.
        <br />
        Công thức Euler là một trong những công thức nổi tiếng nhất trong toán
        học:
        <Latex>{`$$e^{i\\pi} + 1 = 0$$`}</Latex>
        Chuỗi Taylor của một hàm số <Latex>{`$f(x)$`}</Latex> quanh điểm{" "}
        <Latex>{`$x = a$`}</Latex> là:
        <Latex>{`$$f(x) = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\cdots$$`}</Latex>
      </p>
    </>
  );
}
