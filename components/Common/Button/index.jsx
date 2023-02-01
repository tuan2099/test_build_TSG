import Link from "next/link";
import PropTypes from "prop-types";

const Button = ({ href, value, ...props }) => {
  const { download } = props;
  return (
    <Link
      className="primary-btn inline-block text-xs font-semibold py-3 px-8 bg-greenColor text-white"
      href={href}
      download={download}
    >
      {value}
    </Link>
  );
};

Button.propTypes = {
  href: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default Button;
