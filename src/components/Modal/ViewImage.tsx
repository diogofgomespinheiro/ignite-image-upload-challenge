import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        bg="pGray.800"
        width="auto"
        maxWidth="900px"
        borderRadius="6px"
      >
        <ModalBody
          as={Image}
          src={imgUrl}
          p={0}
          boxSize="600px"
          maxWidth="900px"
          borderTopRadius="6px"
        />
        <ModalFooter
          display="flex"
          justifyContent="start"
          alignItems="center"
          bg="pGray.800"
          borderBottomRadius="6px"
        >
          <Link href={imgUrl} isExternal>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
