const FormerLogoAsterisk = ({ fill }) => {
    console.log("asterisks", fill);
    return (
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.6072 9.07274C12.409 9.1347 12.3321 9.37454 12.4575 9.54016L15.2521 13.2317C15.3547 13.3673 15.3242 13.561 15.1849 13.6586L12.0789 15.8328C11.9459 15.9259 11.7629 15.8963 11.6661 15.7659L8.83931 11.962C8.7198 11.8012 8.47925 11.8005 8.35879 11.9606L5.61614 15.6059C5.5182 15.7361 5.33425 15.7643 5.20178 15.6695L2.174 13.5018C2.03542 13.4026 2.00722 13.208 2.11195 13.0736L4.89928 9.49476C5.02651 9.33139 4.9539 9.0913 4.75746 9.02582L0.288887 7.53629C0.130042 7.48335 0.0452836 7.31062 0.100597 7.15258L1.30123 3.72226C1.35584 3.56623 1.52639 3.48378 1.6826 3.5379L6.0818 5.06204C6.27669 5.12956 6.48001 4.98482 6.48001 4.77857L6.48001 0.3C6.48001 0.134315 6.61433 0 6.78001 0L10.58 0C10.7457 0 10.88 0.134315 10.88 0.3V4.79098C10.88 4.99366 11.0768 5.13801 11.2701 5.07713L15.6803 3.68811C15.8358 3.63913 16.0019 3.72332 16.0544 3.87768L17.221 7.30882C17.2753 7.46845 17.1874 7.64144 17.0265 7.69173L12.6072 9.07274Z"
                fill={fill}
            />
        </svg>
    );
};

export default FormerLogoAsterisk;
