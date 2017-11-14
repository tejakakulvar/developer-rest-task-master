import React from 'react';
import AnimatedPageWrapper from '../../utils/animation/AnimatedPageWrapper';
import cssmodules from 'react-css-modules';
import PropTypes from 'prop-types';

class HomePage extends React.Component {
  render() {
    return (
      <article style={{paddingLeft:'100px',paddingRight:'100px'}}>
        <div>
          <section className="text-section">

            <h1>Welcome</h1>
            <p>First of all, thank you for interseting to apply our frontend developer position. We hope that you are ready for the test task.</p>
            <p>
                This application is extracted from a history version of a live project.
                but there are some features are still missing. since we have many developers works on this project.
                so its important to ensure of all developers that follows the same coding style and structure.
                The new developer (you) needs to follow the existing code structure to continue building features for this project.
            </p>
            <p>
                There is no right or wrong result for this test. There are hundreds way to make the similar UI apearance.
                Per this test, We are not looking for a quick and dirty solution (e.g. hard code everything on the UI view).
                We expecting to work with perfectionist developer that maintainability and reusability of the code are the key factors.
            </p>
            <p>The default username is <code>jixian</code> and the default password is <code>jixian</code>, the task is on the <a href="./client-dashboard">dashboard screen</a>.</p>

          </section>
          <section className="text-section">
            <h3>Requirements</h3>
            <p>The below video demostrait how we want it to be, Actually we already implemented all these feature in our current version, but your task is implementat the same feature as what we have now. Please do not miss any small details.</p>
            <div style={{marginLeft:"auto",marginRight:"auto",width:'560px'}} >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/A1VPGKbHayo" frameBorder={0} allowFullScreen></iframe>
            </div>
            <ul>
              <li>
                <p>Per the product list, you should define a hierarchy of react UI components, that make sure its internally reuseable. </p>
              </li>
              <li>
                <p>Per the popup dialog should be a seperate react UI components as well. Since the popup effect and animation would be a resuable visual effect in the system, we would like to using reacts HOC (Higher-Order Components) feature to implement the popup effect as a wrapper.
                so later on whenver we need to popup a react UI Component, we could just write single line of code to pass the component into the wrapper.  </p>
              </li>
              <li>
                <p>The data should be define in a separate file in JSON format, Your code should use redux <strong>async actions</strong> to simulate these data are request from a remote server. so on the first time to init the UI ,
                it should start to request the data and showing the loading indicator on the UI, when data arrived then you should animate to re-render the UI to show the loaded data. </p>
              </li>
              <li>
                <p>Per the data workflow, please using React+Redux One-way data binding design pattern.</p>
              </li>
              <li>
                <p>The page should be responsive to fit for iPad portrait screen .</p>
              </li>
              <li>
                <p>The animation effects should be same as the demo.</p>
              </li>
            </ul>
          </section>

          <section className="text-section">
            <h3>Suggestions</h3>
            <p>Since there is no right or wrong solution for this task, we would like to see how you make your code solution as perfect as possible.
               so below suggestions would be part of our stardard about how we are going to evaluate your code.</p>
            <ul>
              <li>
                <p>Per using Git, We recommend you to commit your code on every small improvement that you have made with meaningful comments,
                in this way we could understand the pathway about see how you solve the issue.</p>
              </li>
              <li>
                <p>From your code we would like to see how you understand the <a href="https://en.wikipedia.org/wiki/Single_responsibility_principle">Single Responsibility Principle</a>. Please pay attention on how to make your code maxiume reusable.
                we are NOT only expecting to see duplicate code or hundreds lines of FAT function.
                Even the apperance may looks similar to what we want, but this kind of code will be rejected right away. </p>
              </li>
              <li>
                <p>After all your code structure looks good. please tweek about refine the animation effect,
                Please keep in mind that you are making a production level project. its not a school test or demo.
                You can reference how we anmiate the UI in the live demo. </p>
              </li>
            </ul>
          </section>

          <section className="text-section">
            <h3>How to start</h3>
            <p>If you are ready to start to figure out this puzzle, please (<a href="https://github.com/hellojixian/developer-rest-task">fork this project</a>) to your own github account.
            Then you can feel free to try all changes there.
            </p>
            <p>To run the project, you need to install node.js environment on your computer, <br/>
            go to the root folder of this project, run command <strong>"npm start"</strong>, <br/>
            then you can access the code in your browser at http://localhost:8000/ <br/>
            </p>
          </section>

          <section className="text-section">
            <h3>How to submit</h3>
            <p>When you consider your solution is ready to submit, please follow below steps to deliver it us for review.</p>
            <ol>
                <li>Commit and push the code to Git repositroy </li>
                <li>shoot a short video to demostrait how it looks.</li>
                <li>Publish your code on any web services.</li>
                <li>Send us an email about how to access your code and the link of the demo video.</li>
            </ol>
            <p>Usually you will get our feedback in the next 2-3days after you deliver your solution.</p>
          </section>
        </div>
      </article>
    );
  }
}

HomePage.displayName = 'PagesHomePage';
HomePage.propTypes = {};
HomePage.defaultProps = {};

//apply animations to homepage
HomePage = AnimatedPageWrapper(HomePage);

export default HomePage;
