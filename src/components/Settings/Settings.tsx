import React from "react";
import { Setting, StyledSettings } from "./Settings.styles";
import { HiLanguage } from "react-icons/hi2";
import { GoMoon } from "react-icons/go";
import { Text } from "../../utils/Text.styles";
import { useAppContext } from "../../context/App.context";

const Settings = () => {
  const { theme, text, language, toggleLanguage, toggleTheme } = useAppContext();

	const SETTINGS = [
		{
			label: text.language,
			icon: <HiLanguage size={23} />,
			value: text[language === "english" ? "french" : "english"],
			onClick: () => toggleLanguage(),
		},
		{
			label: text.appearance,
			icon: <GoMoon size={23} />,
			value: text[theme === "dark" ? "light" : "dark"],
			onClick: () => toggleTheme(),
		},
	];

	return (
		<StyledSettings>
			{SETTINGS.map(({ label, icon, value, onClick }) => (
				<Setting onClick={onClick}>
					{icon}
					<Text>{`${label} : ${value}`}</Text>
				</Setting>
			))}
		</StyledSettings>
	);
};

export default Settings;
