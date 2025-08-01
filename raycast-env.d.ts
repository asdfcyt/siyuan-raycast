/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** 思源笔记服务器地址 - 思源笔记服务器地址 (e.g., http://127.0.0.1:6806) */
  "siyuanUrl": string,
  /** API Token - 思源笔记 API token (如果启用了身份验证) */
  "apiToken"?: string,
  /** 默认笔记本ID - 创建新笔记的默认笔记本ID */
  "notebookId"?: string,
  /** 每日笔记路径模板 - 每日笔记路径模板 (e.g., 笔记本名称/daily/{{date}}) */
  "dailyNotePath": string,
  /** 工作空间路径 - 思源笔记工作区路径 */
  "workspacePath": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-notes` command */
  export type SearchNotes = ExtensionPreferences & {}
  /** Preferences accessible in the `create-note` command */
  export type CreateNote = ExtensionPreferences & {}
  /** Preferences accessible in the `add-to-daily-note` command */
  export type AddToDailyNote = ExtensionPreferences & {}
  /** Preferences accessible in the `recent-notes` command */
  export type RecentNotes = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-notes` command */
  export type SearchNotes = {
  /** 输入搜索关键词 */
  "query": string,
  /** 输入路径关键词筛选 */
  "path": string
}
  /** Arguments passed to the `create-note` command */
  export type CreateNote = {}
  /** Arguments passed to the `add-to-daily-note` command */
  export type AddToDailyNote = {
  /** 请输入记录内容 */
  "content": string
}
  /** Arguments passed to the `recent-notes` command */
  export type RecentNotes = {}
}

