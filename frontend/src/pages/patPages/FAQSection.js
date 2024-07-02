import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Text } from "@chakra-ui/react";
import React from "react";
import Infonavbar from "./Infonavbar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const FAQSection = () => {

  const history = useHistory();
  const dctr = ()=>{
    history.push("/Dtrgtn");
  }

  const pst = ()=>{
    history.push("/Ptrgtn");
  }

  const Abt = ()=>{
    history.push("/AboutUs");
  }
  const contact = ()=>{
    history.push("/Contact");
  }
  const FAQSection = ()=>{
    history.push("/FAQSection")
  }
  const Features = ()=>{
     history.push("/Features");
  }
  const faqs = [
    {
      question: "What health insurance plans do you accept?",
      answer: "We accept a variety of health insurance plans. Please contact our office for specific details about your insurance coverage."
    },
    {
      question: "How do I schedule an appointment?",
      answer: "You can schedule an appointment by calling our office during business hours or using our online appointment booking system on our website."
    },
    {
      question: "What are your office hours?",
      answer: "Our office hours are Monday to Friday, 9:00 AM to 5:00 PM. We are closed on weekends and major holidays."
    },
    {
      question: "Do you offer telemedicine appointments?",
      answer: "Yes, we offer telemedicine appointments for certain medical services. Please contact our office to inquire about telemedicine options."
    },
    {
      question: "What should I bring to my appointment?",
      answer: "Please bring your photo ID, insurance card, and any relevant medical records or test results to your appointment."
    },
    {
      question: "How can I request a prescription refill?",
      answer: "You can request a prescription refill by contacting our office during business hours. We may require you to provide information about the medication and dosage."
    },
    {
      question: "What should I do in case of a medical emergency?",
      answer: "In case of a medical emergency, please dial 911 or go to the nearest emergency room immediately."
    },
    {
      question: "What types of medical conditions do you treat?",
      answer: "We treat a wide range of medical conditions, including but not limited to: diabetes, hypertension, asthma, allergies, and infections."
    },
    {
      question: "What preventive care services do you offer?",
      answer: "We offer various preventive care services, including vaccinations, screenings, and wellness exams. Please contact our office for more information."
    },
    {
      question: "Do you provide pediatric care?",
      answer: "Yes, we provide pediatric care for children of all ages. Our pediatric services include well-child check-ups, vaccinations, and sick visits."
    },
    {
      question: "What diagnostic tests do you perform in-office?",
      answer: "We perform a variety of diagnostic tests in-office, including blood tests, urine tests, X-rays, and EKGs."
    },
    {
      question: "How do I access my medical records?",
      answer: "You can request access to your medical records by contacting our office. We may require you to complete a release form."
    },
    {
      question: "What should I expect during a routine check-up?",
      answer: "During a routine check-up, your healthcare provider will perform a physical exam, review your medical history, and may order preventive screenings or tests."
    },
    {
      question: "What should I do if I need to cancel or reschedule an appointment?",
      answer: "If you need to cancel or reschedule an appointment, please contact our office at least 24 hours in advance to avoid cancellation fees."
    },
    {
      question: "Do you offer virtual consultations for non-urgent medical concerns?",
      answer: "Yes, we offer virtual consultations for non-urgent medical concerns. Please contact our office to schedule a virtual appointment."
    },
    {
      question: "What payment options do you accept?",
      answer: "We accept various payment options, including cash, check, credit card, and health savings account (HSA) or flexible spending account (FSA) cards."
    },
    {
      question: "How can I contact you outside of office hours?",
      answer: "You can leave a message on our answering machine or send us an email, and we will get back to you as soon as possible."
    },
    {
      question: "Do you offer specialized services or treatments?",
      answer: "Yes, we offer specialized services and treatments for certain medical conditions. Please contact our office to inquire about our specialty services."
    },
    {
      question: "What COVID-19 precautions are in place at your facility?",
      answer: "We have implemented various COVID-19 precautions to ensure the safety of our patients and staff, including mask mandates, social distancing, and enhanced cleaning protocols."
    },
    {
      question: "How can I obtain a referral to a specialist?",
      answer: "Your primary care provider can provide a referral to a specialist if it is medically necessary. Please contact our office for assistance with obtaining a referral."
    },
  ];


  return (

    <>

<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-4xl">Medlinker</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900 cursor-pointer" onClick={Features} >Features</a>
      <a class="mr-5 hover:text-gray-900 cursor-pointer" onClick={Abt}>About Us</a>
      <a class="mr-5 hover:text-gray-900 cursor-pointer" onClick={contact}> ContactUs</a>
      <a class="mr-5 hover:text-gray-900 cursor-pointer" onClick={FAQSection}> Emergency</a>
    </nav>
  </div>
</header>
    
    <Accordion allowToggle>
      {faqs.map((faq, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton
              borderRadius="md"
              _hover={{ bg: "gray.100" }}
              _focus={{ boxShadow: "none" }}
              _expanded={{ bg: "gray.100" }}
              bg="white"
              color="gray.800"
              fontWeight="bold"
              py={4}
              px={6}
            >
              <Box flex="1" textAlign="left">
                {faq.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            borderRadius="md"
            bg="gray.50"
            boxShadow="md"
            p={6}
            fontSize="sm"
            color="gray.700"
          >
            {faq.answer}
          </AccordionPanel>
        </AccordionItem> 
      ))}
    </Accordion>
    </>
  );
};

export default FAQSection;