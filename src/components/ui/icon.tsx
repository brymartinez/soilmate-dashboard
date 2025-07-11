import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export const Icon = ({ name, className }: { name: IconProp; className?: string }) => {
  return <FontAwesomeIcon icon={name} className={className} />;
};
