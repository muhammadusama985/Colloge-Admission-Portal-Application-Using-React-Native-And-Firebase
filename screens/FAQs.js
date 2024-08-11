import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FAQs = () => {
  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to the Change Password section in your profile and follow the instructions.',
    },
    {
      question: 'How do I update my email address?',
      answer: 'To update your email address, go to the Change Password section in your profile and enter your new email address.',
    },
    {
      question: 'What should I do if I encounter an issue?',
      answer: 'If you encounter any issues, please contact our customer support team through the Customer Support section in your profile.',
    },
    // Add more FAQs as needed
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faqContainer}>
          <Text style={styles.question}>{faq.question}</Text>
          <Text style={styles.answer}>{faq.answer}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003F6C',
    marginBottom: 20,
    textAlign: 'center',
  },
  faqContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  answer: {
    fontSize: 16,
    color: '#666',
  },
});

export default FAQs;
