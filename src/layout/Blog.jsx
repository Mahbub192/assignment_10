import React from "react";
import ReactToPdf from "react-to-pdf";
import Footer from "../shared/Footer/Footer";
import NavigationBar from "../shared/NavigationBar/NavigationBar";

const Blog = () => {
  const ref = React.createRef();

  const options = {
    filename: "my-component.pdf",
    orientation: "portrait",
    unit: "in",
    format: 'A2',
  };
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="container mx-auto mt-10">
        <h1 className="text-center my-10 text-2xl font-bold underline">
          Question & Ans
        </h1>
        <ReactToPdf
          targetRef={ref}
          filename={options.filename}
          options={options}
        >
          {({ toPdf }) => (
            <button className="btn" onClick={toPdf}>
              Generate PDF
            </button>
          )}
        </ReactToPdf>
        <div ref={ref} className="px-2 mt-5">
          <h2 className="text-xl">
            <span className="font-bold">Question-1</span> Differences between
            uncontrolled and controlled components ?
          </h2>
          <p className="mt-2">
            <span className="font-bold">Ans: </span>Uncontrolled components,
            such as natural systems, operate independently and without external
            regulation, while controlled components, such as man-made systems,
            are designed to operate within specific parameters and subject to
            external inputs and regulation. The behavior of uncontrolled
            components can be unpredictable, while controlled components are
            designed to operate predictably and adapt to changing circumstances.
            The key differences between these two types of components are their
            predictability and adaptability, with controlled components being
            more predictable and adaptable than uncontrolled components.
            Overall, understanding the differences between uncontrolled and
            controlled components is essential in developing effective systems
            and strategies to manage and regulate their behavior.
          </p>
          <br />
          <h2 className="text-xl">
            <span className="font-bold">Question-2</span> How to validate React
            props using PropTypes ?
          </h2>
          <p className="mt-2">
            <span className="font-bold">Ans: </span>PropTypes is a utility
            library in React that allows developers to validate the type and
            structure of data passed between components through props. By
            defining expected prop types using PropTypes, developers can catch
            errors early in development and ensure the reliability and
            maintainability of their code. PropTypes provides a variety of
            validators for different data types and structures, including custom
            data types, making it a useful tool for improving code quality in
            React applications.
          </p>
          <br />
          <h2 className="text-xl">
            <span className="font-bold">Question-3</span> Difference between
            nodejs and express js ?
          </h2>
          <p className="mt-2">
            <span className="font-bold">Ans: </span>Node.js is a server-side
            JavaScript runtime environment that allows developers to build
            server-side applications using JavaScript. Express.js, on the other
            hand, is a lightweight and flexible web application framework built
            on top of Node.js. <br />
            Node.js provides a platform for executing JavaScript code outside of
            the browser, which makes it an excellent choice for building
            server-side applications. It includes features such as event-driven
            architecture and non-blocking I/O, which allows it to handle large
            volumes of data and concurrent connections efficiently. <br />
            Express.js, on the other hand, is designed to simplify the process
            of building web applications using Node.js. It provides a set of
            tools and features, including routing, middleware, and templating,
            that enable developers to create robust and scalable web
            applications quickly.
          </p>
          <br />
          <h2 className="text-xl">
            <span className="font-bold">Question-4</span> What is a custom hook,
            and why will you create a custom hook ?
          </h2>
          <p className="mt-2">
            <span className="font-bold">Ans: </span>
            Custom hooks are reusable functions in React that allow developers
            to extract and reuse stateful logic between components. Custom hooks
            encapsulate the shared functionality, which can include state
            management, data fetching, or event handling, and provide a clean
            and reusable interface for components to use. They help to reduce
            code duplication, improve code organization and reusability, and
            make components more focused on rendering and presenting data.
            Developers can create custom hooks to reuse logic that is shared
            between multiple components, making the codebase more maintainable
            and easier to refactor. Custom hooks also help to abstract away
            implementation details and provide a clear separation of concerns
            between the presentation and logic layers of a component.
            Ultimately, custom hooks are a powerful tool for improving code
            quality and reusability in React applications, allowing developers
            to build complex and maintainable applications more efficiently.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
