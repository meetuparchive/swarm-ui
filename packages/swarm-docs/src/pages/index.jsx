import React from 'react';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <h1 className="text--display">Designing for social transformation</h1>
    <hr />
    <br />
    <br />
    <h3 className="text--big">The Swarm Design System is a living ecosystem to help our teams craft online experiences to bring people together offline</h3>
    <br />
    <p className="text--body">
      Instead of rethinking the foundation of each new Meetup experience,
      the Swarm Design System allows teams to focus on transforming lives through new ideas and experiments.
      Here you’ll find resources for creating a unified, consistent experience with purpose, design guidelines,
      content style, and best practices, helping us to quickly create one-off tests and solutions.
    </p>
    <br />
    <br />
    <h3 className="text--big">Who is it for?</h3>
    <h4 className="text--sectionTitle">Designers</h4>
    <ul className="about-list">
      <li>Guidelines to learn the Meetup product design patterns and principles</li>
      <li>Components section to familiarize with the existing components to be incorporated into designs</li>
    </ul>
    <h4 className="text--sectionTitle">Engineers</h4>
    <ul className="about-list">
      <li>Accessibility, internationalization, and platform engineering guidelines</li>
      <li>Documentation for using design-ready, stable components and tools</li>
    </ul>
    <h4 className="text--sectionTitle">Product Managers</h4>
    <ul className="about-list">
      <li>Save time and ship faster by knowing all Meetup product design and development patterns and principles</li>
      <li>Understand the design and development process at Meetup at a glance</li>
      <li>Resource for creating within an existing component base to increase speed and agility</li>
    </ul>
  </Layout>
);

export default IndexPage;
