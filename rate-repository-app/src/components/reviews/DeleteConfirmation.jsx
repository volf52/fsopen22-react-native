import { AlertDialog, Button, Divider } from "native-base"

const DeleteConfirmation = ({ visible, onConfirm, onCancel, cancelRef }) => {
  return (
    <AlertDialog
      isOpen={visible}
      onClose={onCancel}
      leastDestructiveRef={cancelRef}
    >
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header fontSize="lg" fontWeight="bold">
          Delete review
        </AlertDialog.Header>

        <AlertDialog.Body>
          Are you sure you want to delete this review?
        </AlertDialog.Body>

        <AlertDialog.Footer justifyContent="space-around">
          <Button onPress={onCancel} ref={cancelRef} backgroundColor="gray.400">
            Cancel
          </Button>
          <Button colorScheme="red" onPress={onConfirm}>
            Delete
          </Button>
          {/* <Button onPress={onConfirm} colorScheme="red">
            Delete
          </Button> */}
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  )
}

export default DeleteConfirmation
