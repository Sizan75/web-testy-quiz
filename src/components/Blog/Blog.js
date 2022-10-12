import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h1 className="text-gray-800 mb-4 dark:text-white font-sans font-medium text-xl pt-8 pl-8">Question 1: What is the purpose of React Router?</h1>
                <p>Answer: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div>
                <h1 className="text-gray-800 mb-4 dark:text-white font-sans font-medium text-xl pt-8 pl-8">Question 2: How does Context API works?</h1>
                <p>Answer:The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier </p>
            </div>
            <div>
                <h1 className="text-gray-800 mb-4 dark:text-white font-sans font-medium text-xl pt-8 pl-8">Question 3: What is UseRef?</h1>
                <p>Answer: useRef is like a “box” that can hold a mutable value in its .current property.
                    You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with useRef, React will set its .current property to the corresponding DOM node whenever that node changes.</p>
            </div>



        </div>
    );
};

export default Blog;