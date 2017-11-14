import React from 'react';
import PropTypes from 'prop-types';
import AnimatedPageWrapper from '../../utils/animation/AnimatedPageWrapper';

class NotFound extends React.Component {

  render() {
    return (
      <article>
        <div>
          <section className="text-section">
            <h1>Page not found</h1>
            <p>The requested URL <strong>{this.props.location.pathname}</strong> was not found on this server.</p>
            <p>That is all we know.</p>
          </section>
        </div>
      </article>
    );
  }
}

NotFound.displayName = 'PagesNotFound';
NotFound.propTypes = {};
NotFound.defaultProps = {};

export default AnimatedPageWrapper(NotFound);
