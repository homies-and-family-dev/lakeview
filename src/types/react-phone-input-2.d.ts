declare module 'react-phone-input-2' {
  import { Component } from 'react';
  
  interface PhoneInputProps {
    country?: string;
    value?: string;
    onChange?: (phone: string) => void;
    containerClass?: string;
    inputClass?: string;
    buttonClass?: string;
  }

  export default class PhoneInput extends Component<PhoneInputProps> {}
} 