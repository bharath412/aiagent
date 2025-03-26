import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const TestAutomationDemo: React.FC = () => {
  const testScriptCode = `*** Settings ***
Library    SeleniumLibrary

*** Variables ***
\${URL}    https://example.com/login
\${BROWSER}    chrome
\${USERNAME_FIELD}    id=username
\${PASSWORD_FIELD}    id=password
\${LOGIN_BUTTON}    id=login-button
\${ERROR_MESSAGE}    class=error-message

*** Test Cases ***
Valid Login
    [Documentation]    Test login with valid credentials
    Open Login Page
    Input Username    validuser@example.com
    Input Password    ValidPassword123
    Click Login
    Verify Successful Login

Invalid Username Format
    [Documentation]    Test login with invalid username format
    Open Login Page
    Input Username    invaliduser
    Input Password    ValidPassword123
    Click Login
    Verify Error Message    Invalid email format

Empty Username
    [Documentation]    Test login with empty username
    Open Login Page
    Input Password    ValidPassword123
    Click Login
    Verify Error Message    Username is required

Empty Password
    [Documentation]    Test login with empty password
    Open Login Page
    Input Username    validuser@example.com
    Click Login
    Verify Error Message    Password is required

Invalid Credentials
    [Documentation]    Test login with invalid credentials
    Open Login Page
    Input Username    validuser@example.com
    Input Password    WrongPassword123
    Click Login
    Verify Error Message    Invalid credentials

*** Keywords ***
Open Login Page
    Open Browser    \${URL}    \${BROWSER}
    Wait Until Element Is Visible    \${USERNAME_FIELD}

Input Username
    [Arguments]    \${username}
    Input Text    \${USERNAME_FIELD}    \${username}

Input Password
    [Arguments]    \${password}
    Input Text    \${PASSWORD_FIELD}    \${password}

Click Login
    Click Element    \${LOGIN_BUTTON}

Verify Successful Login
    Wait Until Page Contains    Welcome to your account
    Location Should Contain    /dashboard

Verify Error Message
    [Arguments]    \${expected_message}
    Wait Until Element Is Visible    \${ERROR_MESSAGE}
    Element Should Contain    \${ERROR_MESSAGE}    \${expected_message}`;

  return (
    <Card className="shadow-lg border border-gray-200 overflow-hidden mb-8 lg:mb-0">
      <div className="bg-gray-900 text-white p-4">
        <div className="font-medium">AI-Powered Test Automation Demo</div>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-6">
          <div className="border rounded-md p-4 bg-gray-50 mb-4">
            <h4 className="font-medium mb-2">Input: Test Requirements</h4>
            <div className="font-mono text-sm bg-white p-3 rounded border">
              <p>Create test cases for user login functionality with username/password validation</p>
            </div>
          </div>
          
          <div className="border rounded-md p-4 bg-gray-50">
            <h4 className="font-medium mb-2">Output: Generated Robot Framework Script</h4>
            <div className="font-mono text-sm bg-gray-900 text-green-400 p-3 rounded overflow-auto h-64">
              <pre>{testScriptCode}</pre>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestAutomationDemo;
