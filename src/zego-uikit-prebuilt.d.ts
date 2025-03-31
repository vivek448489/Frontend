declare module 'zego-uikit-prebuilt' {
  export function generateKitTokenForTest(appID: number, serverSecret: string, roomID: string, userID: string, userName: string): string;
  export function create(kitToken: string): any;
}