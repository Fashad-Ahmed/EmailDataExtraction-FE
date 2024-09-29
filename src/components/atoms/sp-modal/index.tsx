import { Modal } from 'antd';
import { ModalProps } from 'antd';
import { cn } from '@/utils/helpers/tailwind.helper';

export interface SPModalProps extends ModalProps {}

const SPModal = ({ className, children, ...props }: ModalProps) => {
  return (
    <Modal className={cn(className)} {...props}>
      {children}
    </Modal>
  );
};

export default SPModal;
