import PropTypes from "prop-types";

export default function Section(props: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2>{props.title}</h2>
      {props.children}
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}