import React from 'react';
import {Text, View} from 'react-native';

const PrivacyPolicy = () => {
  return (
    <View>
      <Text style={styles.heading}>PRIVACY POLICY MODEL FOR MOBILE APPLICATIONS</Text>
      <Text style={styles.p}>This privacy policy governs your use of the software application MessiahGo (&ldquo;Application&rdquo;) for mobile devices that was created by aGo.&nbsp;The Application provides the user a safe space (users who are from the same college, Messiah College) to interact in a chat application that is enabled at night. This is to allow users who study till late at night to have the chance to exchange interactions with other fellow night-owls. Other than that, the application will start it&rsquo;s development of an event page to inform users of Messiah College of the events that are organized by users.</Text>
      <Text style={styles.heading}>What information does the Application obtain and how is it used?</Text>
      <Text style={styles.p}>The Application obtains information such as email address and name. The email address is obtained in order to register an account for the user and to send users notifications and verification emails. The name of the user is obtained to be used as profile information and also for user identification.</Text>
      <Text style={styles.heading}>User Provided Information</Text>
      <Text style={styles.p}>The Application obtains the information you provide when you download and register the Application.&nbsp;Registration with us is mandatory in order to be able to use the basic features of the Application.</Text>
      <Text style={styles.p}>When you register with us and use the Application, you generally provide&nbsp;(a) your name, email address, user name, password and other registration information; (b) transaction-related information, such as when you make purchases, respond to any offers, or download or use applications from us; (c) information you provide us when you contact us for help; (d) information you enter into our system when using the Application, such as contact information and project management information.</Text>
      <Text style={styles.p}>We may also use the information you provided us to contact you from time to time to provide you with important information, required notices and marketing promotions.</Text>
      <Text style={styles.heading}>Automatically Collected Information&nbsp;</Text>
      <Text style={styles.p}>In addition, the Application may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile devices unique device ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browsers you use, and information about the way you use the Application.&nbsp;</Text>
      <Text style={styles.heading}>Does the Application collect precise real time location information of the device?</Text>
      <Text style={styles.p}>This Application does not collect precise information about the location of your mobile device.&nbsp;</Text>
      <Text style={styles.heading}>Do third parties see and/or have access to information obtained by the Application?</Text>
      <Text style={styles.p}>Only aggregated, anonymized data is periodically transmitted to external services to help us improve the Application and our service.&nbsp;We will share your information with third parties only in the ways that are described in this privacy statement.</Text>
      <Text style={styles.p}>We may disclose User Provided and Automatically Collected Information:</Text>
      <Text style={styles.p}>&bull; as required by law, such as to comply with a subpoena, or similar legal process;</Text>
      <Text style={styles.p}>&bull; when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a&nbsp;government request;</Text>
      <Text style={styles.p}>&bull; with our trusted services providers who work on our behalf, do not have an&nbsp;independent use of the information we disclose to them, and have agreed to adhere&nbsp;to the rules set forth in this privacy statement.</Text>
      <Text style={styles.p}>&bull; If aGo is involved in a merger, acquisition, or sale of all or a&nbsp;portion of its assets, you will be notified via email and/or a prominent notice on our Web site of any change in ownership or uses of this information, as well as any choices you may have regarding this information.</Text>
      <Text style={styles.heading}>What are my opt-out rights?</Text>
      <Text style={styles.p}>You can stop all collection of information by the Application easily by uninstalling the Application. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network. You can also request to opt-out via email, at kl1300@messiah.edu.</Text>
      <Text style={styles.heading}>Data Retention Policy, Managing Your Information</Text>
      <Text style={styles.p}>We will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. We will retain Automatically Collected information for up to 24 months&nbsp;and thereafter may store it in aggregate. If you&rsquo;d like us to delete User Provided Data that you have provided via the Application, please contact us at kl1300@messiah.edu and we will respond in a reasonable time. Please note that some or all of the User Provided Data may be required in order for the Application to function properly.</Text>
      <Text style={styles.heading}>Children</Text>
      <Text style={styles.p}>We do not use the Application to knowingly solicit data from or market to children under the age of 13. If a parent or guardian becomes aware that his or her child has provided us with information without their consent, he or she should contact us at kl1300@messiah.edu. We will delete such information from our files within a reasonable time.</Text>
      <Text style={styles.heading}>Security</Text>
      <Text style={styles.p}>We are concerned about safeguarding the confidentiality of your information. We provide physical, electronic, and procedural safeguards to protect information we process and maintain. For example, we limit access to this information to authorized employees and contractors who need to know that information in order to operate, develop or improve our Application. Please be aware that, although we endeavor provide reasonable security for information we process and maintain, no security system can prevent all potential security breaches.</Text>
      <Text style={styles.heading}>Changes</Text>
      <Text style={styles.p}>This Privacy Policy may be updated from time to time for any reason. We will notify you of any changes to our Privacy Policy by posting the new Privacy Policy here&nbsp;and informing you via email or text message. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.&nbsp;</Text>
      <Text style={styles.heading}>Your Consent</Text>
      <Text style={styles.p}>By using the Application, you are consenting to our processing of your information as set forth in this Privacy Policy now and as amended by us. "Processing,&rdquo; means using cookies on a computer/hand held device or using or touching information in any way, including, but not limited to, collecting, storing, deleting, using, combining and disclosing information, all of which activities will take place in the United States. If you reside outside the United States your information will be transferred, processed and stored there under United States privacy standards.&nbsp;</Text>
      <Text style={styles.heading}>Contact us</Text>
      <Text style={styles.p}>If you have any questions regarding privacy while using the Application, or have questions about our practices, please contact us via email at kl1300@messiah.edu.</Text>
      <Text style={styles.p}></Text>
    </View>
  )
}

const styles = {
  heading: {
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 15
  },
  p: {
    marginBottom: 5
  }
}

export default PrivacyPolicy;
