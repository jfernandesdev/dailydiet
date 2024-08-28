import React from 'react';
import { Modal } from 'react-native';
import { Button } from '@components/Button';
import { ButtonContainer, ModalContainer, ModalText, Overlay } from './styles';

interface ModalProps {
  title: string;
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export function ModalConfirmation({ title, visible, onCancel, onConfirm }: ModalProps) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <Overlay>
        <ModalContainer>
          <ModalText>{title}</ModalText>
          <ButtonContainer>
            <Button title="Cancelar" type="SECONDARY" onPress={onCancel} />
            <Button title="Sim, excluir" onPress={onConfirm} />
          </ButtonContainer>
        </ModalContainer>
      </Overlay>
    </Modal>
  );
}

