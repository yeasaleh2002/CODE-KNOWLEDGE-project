import React from 'react';
import { Accordion } from 'react-bootstrap';
import './QandA.css';

const QandA = () => {
    return (
        <div className="q-and-a-style container py-5 px-3">
            <div>
            <h1 className="text-primary pb-4">Question And Answer</h1>

            </div>

     {/* Accordion part 1 */}
            <div>
            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header><b>  Describe about  C++ Programming Language</b></Accordion.Header>
    <Accordion.Body>
    C++ (/ˌsiːˌplʌsˈplʌs/) is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation.
     It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Oracle, and IBM, so it is available on many platforms.
    </Accordion.Body>
  </Accordion.Item>

  {/* Accordion part 2 */}
  <Accordion.Item eventKey="1">
    <Accordion.Header><b>  Describe about  Python Programming Language</b></Accordion.Header>
    <Accordion.Body>
    Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.
Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly, procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library.
    </Accordion.Body>
  </Accordion.Item>

  {/* Accordion part 3 */}
  <Accordion.Item eventKey="2">
    <Accordion.Header> <b>  Describe about  JavaScript Programming Language</b></Accordion.Header>
    <Accordion.Body>
    JavaScript (/ˈdʒɑːvəˌskrɪpt/),[9] often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.[10] JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.
   Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.[11] Over 97% of websites use it client-side for web page behavior,[12] often incorporating third-party libraries.[13] Most web browsers have a dedicated JavaScript engine to execute the code on the user's device.
    </Accordion.Body>
  </Accordion.Item>

  {/* Accordion part 4 */}
  <Accordion.Item eventKey="3">
    <Accordion.Header> <b>  Describe about  Java Programming Language</b></Accordion.Header>
    <Accordion.Body>
    Java (Indonesian: Jawa, Indonesian pronunciation: [ˈdʒawa]; Javanese: ꦗꦮ; Sundanese: ᮏᮝ) is one of the Greater Sunda Islands in Indonesia. It is bordered by the Indian Ocean to the south and the Java Sea to the north. With a population of 151.8 million, including the inhabitants of its surrounding islands, principally Madura, Java constitutes 56.1 percent of the Indonesian population. 147.7 million people live on Java itself, making it the world's most populous island.
    </Accordion.Body>
  </Accordion.Item>

  {/* Accordion part 5 */}
  <Accordion.Item eventKey="4">
    <Accordion.Header> <b>  Describe about  C Programming Language</b></Accordion.Header>
    <Accordion.Body>
    The C Programming Language (sometimes termed , after its authors' initials) is a computer programming book written by Brian Kernighan and Dennis Ritchie, the latter of whom originally designed and implemented the language, as well as co-designed the Unix operating system with which development of the language was closely intertwined. The book was central to the development and popularization of the C programming language and is still widely read and used today. Because the book was co-authored by the original language designer, and because the first edition of the book served for many years as the de facto standard for the language, the book was regarded by many to be the authoritative reference on C.
    </Accordion.Body>
  </Accordion.Item>

  {/* Accordion part 6 */}
  <Accordion.Item eventKey="5">
    <Accordion.Header> <b>  Describe about  PHP Programming Language</b></Accordion.Header>
    <Accordion.Body>
     PHP is a general-purpose scripting language geared towards web development.[7] It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994.[8] The PHP reference implementation is now produced by The PHP Group.[9] PHP originally stood for Personal Home Page,[8] but it now stands for the recursive initialism PHP: Hypertext Preprocessor.
    </Accordion.Body>
  </Accordion.Item>

  {/* Accordion part 7 */}
  <Accordion.Item eventKey="6">
    <Accordion.Header> <b> Describe about  C# Programming Language</b></Accordion.Header>
    <Accordion.Body>
    C# (/si ʃɑːrp/ see sharp)[b] is a general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.
    </Accordion.Body>
  </Accordion.Item>

  {/* Accordion part 8 */}
  <Accordion.Item eventKey="7">
    <Accordion.Header> <b> Describe about  Swift Programming Language</b></Accordion.Header>
    <Accordion.Body>
    Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community. First released in 2014, Swift was developed as a replacement for Apple's earlier programming language Objective-C, as Objective-C had been largely unchanged since the early 1980s and lacked modern language features. Swift works with Apple's Cocoa and Cocoa Touch frameworks, and a key aspect of Swift's design was the ability to interoperate with the huge body of existing Objective-C code developed for Apple products over the previous decades. It is built with the open source LLVM compiler framework and has been included in Xcode since version 6, released in 2014. On Apple platforms,[11] it uses the Objective-C runtime library which allows C, Objective-C, C++ and Swift code to run within one program.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
            </div>
        </div>
    );
};

export default QandA;