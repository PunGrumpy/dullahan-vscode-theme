import { alpha, darken, lighten } from '../palette'
import { ColorDefinitions, Palette } from '@/src/types'

/**
 * Builds the full UI color map for the light-shell variant (White).
 *
 * A light theme is the inverse of the dark shell in two structural ways, which
 * is why it needs its own factory rather than reusing {@link buildDarkShellColors}:
 *
 *  1. Translucent washes are drawn in *black* (`alpha(k, …)`), not white — a
 *     white glow is invisible on a white ground.
 *  2. Borders are opaque and visible; the dark shell hides most of them because
 *     its seamless near-black surfaces don't need separators, whereas light
 *     chrome reads as mush without them.
 *
 * Roles still come entirely from the {@link Palette}, so White shares its source
 * of truth with the dark variants — only the shell logic differs.
 */
export function buildLightShellColors(p: Palette): ColorDefinitions {
  const k = '#000000' // base for translucent shadows/washes
  const w = '#ffffff'

  return {
    foreground: p.fg,
    focusBorder: lighten(p.accent, 0.3),
    'scrollbar.shadow': alpha(w, 0),
    'selection.background': p.bgSelection,

    // Activity bar
    'activityBar.foreground': p.fg,
    'activityBar.background': p.bgOverlay,
    'activityBar.inactiveForeground': alpha(p.fg, 0.6),
    'activityBar.border': p.border,
    'activityBarBadge.background': p.fg,
    'activityBarBadge.foreground': w,

    // Side bar
    'sideBar.background': p.bgElevated,
    'sideBar.foreground': p.fg,
    'sideBar.border': p.border,
    'sideBarTitle.foreground': p.fg,
    'sideBarSectionHeader.background': p.bgElevated,
    'sideBarSectionHeader.foreground': p.fg,

    // Lists & trees
    'list.activeSelectionBackground': p.accent,
    'list.activeSelectionForeground': w,
    'list.focusBackground': p.accent,
    'list.focusForeground': w,
    'list.inactiveSelectionBackground': darken(p.bgElevated, 0.08),
    'list.hoverBackground': alpha(k, 0.04),
    'list.highlightForeground': p.accent,
    'tree.indentGuidesStroke': darken(p.bgElevated, 0.12),

    // Status bar
    'statusBar.foreground': p.fgMuted,
    'statusBar.background': p.bgOverlay,
    'statusBar.border': p.border,
    'statusBar.noFolderBackground': p.bgOverlay,
    'statusBar.debuggingBackground': p.conflict,
    'statusBar.debuggingForeground': w,
    'statusBarItem.hoverBackground': alpha(k, 0.06),
    'statusBarItem.remoteBackground': p.accent,
    'statusBarItem.remoteForeground': w,
    'statusBarItem.errorBackground': p.error,
    'statusBarItem.errorForeground': w,
    'statusBarItem.warningBackground': p.warning,
    'statusBarItem.warningForeground': w,

    // Title bar
    'titleBar.activeBackground': p.bgOverlay,
    'titleBar.activeForeground': p.fg,
    'titleBar.inactiveBackground': p.bgOverlay,
    'titleBar.inactiveForeground': p.fgSubtle,
    'titleBar.border': p.border,

    // Buttons
    'button.background': p.accent,
    'button.foreground': p.accentContrast,
    'button.hoverBackground': darken(p.accent, 0.08),
    'button.secondaryBackground': darken(p.bgElevated, 0.06),
    'button.secondaryForeground': p.fg,
    'button.secondaryHoverBackground': darken(p.bgElevated, 0.12),

    // Inputs
    'input.background': w,
    'input.foreground': p.fg,
    'input.border': p.border,
    'input.placeholderForeground': p.fgFaint,
    'inputOption.activeBorder': p.accent,
    'inputOption.activeForeground': p.accent,
    'inputValidation.errorBackground': lighten(p.error, 0.85),
    'inputValidation.errorBorder': p.error,
    'inputValidation.warningBorder': p.warning,
    'inputValidation.infoBorder': p.info,

    // Links
    'textLink.foreground': p.accent,
    'textLink.activeForeground': darken(p.accent, 0.12),

    // Editor core
    'editor.background': p.bg,
    'editor.foreground': p.fg,
    'editorLineNumber.foreground': p.fgFaint,
    'editorLineNumber.activeForeground': p.fg,
    'editorLineNumber.dimmedForeground': lighten(p.fgFaint, 0.3),
    'editorCursor.foreground': p.fg,
    'editorMultiCursor.primary.foreground': p.fg,
    'editorMultiCursor.secondary.foreground': p.accent,
    'editor.selectionBackground': p.bgSelection,
    'editor.selectionHighlightBackground': alpha(p.accent, 0.12),
    'editor.lineHighlightBackground': lighten(p.accent, 0.9),
    'editor.findMatchBackground': alpha(p.warning, 0.4),
    'editor.findMatchHighlightBackground': alpha(p.warning, 0.22),
    'editor.wordHighlightStrongBackground': alpha(p.synVariable, 0.15),
    'editor.wordHighlightBackground': alpha(k, 0.06),
    'editorIndentGuide.background': darken(p.bg, 0.06),
    'editorIndentGuide.activeBackground': darken(p.bg, 0.18),
    'editorRuler.foreground': darken(p.bg, 0.08),
    'editorBracketMatch.background': alpha(p.accent, 0.14),
    'editorBracketMatch.border': alpha(p.accent, 0.4),
    'editorGhostText.foreground': alpha(p.fg, 0.4),

    // Diagnostics
    'editorError.foreground': p.error,
    'editorWarning.foreground': p.warning,
    'editorInfo.foreground': p.info,
    'editorHint.foreground': p.fgSubtle,

    // Gutter
    'editorGutter.background': p.bg,
    'editorGutter.modifiedBackground': p.warning,
    'editorGutter.addedBackground': p.success,
    'editorGutter.deletedBackground': p.error,

    // Diff editor
    'diffEditor.insertedTextBackground': alpha(p.diffAdded, 0.12),
    'diffEditor.removedTextBackground': alpha(p.diffRemoved, 0.12),
    'diffEditor.insertedLineBackground': alpha(p.diffAdded, 0.07),
    'diffEditor.removedLineBackground': alpha(p.diffRemoved, 0.07),
    'diffEditor.border': p.border,
    'multiDiffEditor.headerBackground': p.bgElevated,
    'multiDiffEditor.background': p.bg,
    'multiDiffEditor.border': p.border,

    // Panel
    'panel.background': p.bg,
    'panel.border': p.border,
    'panelTitle.activeForeground': p.fg,
    'panelTitle.inactiveForeground': p.fgSubtle,
    'panelTitle.activeBorder': p.accent,

    // Badge
    'badge.background': p.accent,
    'badge.foreground': w,
    'profileBadge.background': darken(p.bgElevated, 0.06),
    'profileBadge.foreground': p.fg,

    // Terminal
    'terminal.foreground': p.fg,
    'terminal.selectionBackground': alpha(p.accent, 0.2),
    'terminalCursor.foreground': p.fg,
    'terminal.ansiBlack': p.ansiBlack,
    'terminal.ansiRed': p.ansiRed,
    'terminal.ansiGreen': p.ansiGreen,
    'terminal.ansiYellow': p.ansiYellow,
    'terminal.ansiBlue': p.ansiBlue,
    'terminal.ansiMagenta': p.ansiMagenta,
    'terminal.ansiCyan': p.ansiCyan,
    'terminal.ansiWhite': p.ansiWhite,
    'terminal.ansiBrightBlack': lighten(p.ansiBlack, 0.4),
    'terminal.ansiBrightRed': darken(p.ansiRed, 0.1),
    'terminal.ansiBrightGreen': darken(p.ansiGreen, 0.1),
    'terminal.ansiBrightYellow': darken(p.ansiYellow, 0.1),
    'terminal.ansiBrightBlue': darken(p.ansiBlue, 0.1),
    'terminal.ansiBrightMagenta': darken(p.ansiMagenta, 0.1),
    'terminal.ansiBrightCyan': darken(p.ansiCyan, 0.1),
    'terminal.ansiBrightWhite': p.fg,
    'terminalCommandDecoration.defaultBackground': p.fgFaint,
    'terminalCommandDecoration.successBackground': p.success,
    'terminalCommandDecoration.errorBackground': p.error,
    'terminalStickyScroll.background': p.bgElevated,
    'terminalStickyScroll.border': p.border,

    // Breadcrumbs
    'breadcrumb.background': p.bg,
    'breadcrumb.foreground': p.fgMuted,
    'breadcrumb.focusForeground': p.fg,
    'breadcrumb.activeSelectionForeground': p.accent,

    // Editor group & tabs
    'editorGroup.border': p.border,
    'editorGroupHeader.tabsBackground': p.bgElevated,
    'editorGroupHeader.tabsBorder': p.border,
    'tab.activeBackground': p.bg,
    'tab.activeForeground': p.fg,
    'tab.activeBorder': p.accent,
    'tab.activeBorderTop': p.accent,
    'tab.inactiveBackground': p.bgElevated,
    'tab.inactiveForeground': p.fgSubtle,
    'tab.border': p.border,
    'tab.hoverBackground': p.bg,
    'tab.selectedBackground': p.bg,
    'tab.selectedForeground': p.fg,
    'tab.selectedBorderTop': p.accent,
    'tab.dragAndDropBorder': p.accent,
    'tab.lastPinnedBorder': p.border,
    'tab.activeModifiedBorder': p.warning,
    'tab.inactiveModifiedBorder': alpha(p.warning, 0.5),

    // Scrollbar
    'scrollbarSlider.background': alpha(k, 0.1),
    'scrollbarSlider.hoverBackground': alpha(k, 0.18),
    'scrollbarSlider.activeBackground': alpha(k, 0.28),

    // Progress
    'progressBar.background': p.accent,

    // Widgets
    'widget.shadow': alpha(k, 0.08),
    'widget.border': p.border,
    'editorWidget.background': p.bgElevated,
    'editorWidget.foreground': p.fg,
    'editorWidget.border': p.border,
    'editorWidget.resizeBorder': p.accent,
    'pickerGroup.foreground': p.accent,
    'pickerGroup.border': p.border,
    'debugToolBar.background': p.bgElevated,

    // Notifications
    'notifications.background': p.bgElevated,
    'notifications.foreground': p.fg,
    'notifications.border': p.border,
    'notificationCenter.border': p.border,
    'notificationCenterHeader.background': p.bgOverlay,
    'notificationToast.border': p.border,
    'notificationsErrorIcon.foreground': p.error,
    'notificationsWarningIcon.foreground': p.warning,
    'notificationsInfoIcon.foreground': p.info,

    // Git decorations
    'gitDecoration.addedResourceForeground': p.success,
    'gitDecoration.modifiedResourceForeground': darken(p.warning, 0.05),
    'gitDecoration.deletedResourceForeground': p.error,
    'gitDecoration.untrackedResourceForeground': p.success,
    'gitDecoration.conflictingResourceForeground': p.conflict,
    'gitDecoration.ignoredResourceForeground': p.fgFaint,
    'gitDecoration.submoduleResourceForeground': p.info,

    // Marker navigation
    'editorMarkerNavigationError.background': p.error,
    'editorMarkerNavigationWarning.background': p.warning,
    'editorMarkerNavigationInfo.background': p.info,

    // Merge conflicts
    'merge.currentHeaderBackground': alpha(p.info, 0.3),
    'merge.currentContentBackground': alpha(p.info, 0.15),
    'merge.incomingHeaderBackground': alpha(p.diffRemoved, 0.3),
    'merge.incomingContentBackground': alpha(p.diffRemoved, 0.15),

    // Suggest widget
    'editorSuggestWidget.background': p.bgElevated,
    'editorSuggestWidget.border': p.border,
    'editorSuggestWidget.foreground': p.fg,
    'editorSuggestWidget.highlightForeground': p.accent,
    'editorSuggestWidget.selectedBackground': p.accent,

    // Hover widget
    'editorHoverWidget.background': p.bgElevated,
    'editorHoverWidget.foreground': p.fg,
    'editorHoverWidget.border': p.border,

    // Peek view
    'peekView.border': p.accent,
    'peekViewEditor.background': lighten(p.accent, 0.9),
    'peekViewEditor.matchHighlightBackground': alpha(p.warning, 0.3),
    'peekViewResult.background': p.bgElevated,
    'peekViewResult.selectionBackground': alpha(p.accent, 0.2),
    'peekViewTitle.background': p.bgElevated,

    // Icons, checkboxes, dropdowns, radios
    'icon.foreground': p.fgMuted,
    'checkbox.background': w,
    'checkbox.foreground': p.fg,
    'checkbox.border': p.border,
    'dropdown.background': w,
    'dropdown.foreground': p.fg,
    'dropdown.border': p.border,
    'radio.activeForeground': p.accent,
    'radio.activeBorder': p.accent,
    'radio.inactiveBorder': p.border,

    // Minimap
    'minimap.findMatchHighlight': p.warning,
    'minimap.selectionHighlight': p.bgSelection,
    'minimap.errorHighlight': p.error,
    'minimap.warningHighlight': p.warning,
    'minimapGutter.addedBackground': p.success,
    'minimapGutter.modifiedBackground': p.warning,
    'minimapGutter.deletedBackground': p.error,

    // Settings
    'settings.headerForeground': p.fg,
    'settings.modifiedItemIndicator': p.warning,

    // Inline suggestions & inlay hints
    'editor.inlineSuggest.background': alpha(p.accent, 0),
    'editor.inlineSuggest.foreground': alpha(p.fg, 0.4),
    'editorInlayHint.background': alpha(p.accent, 0.08),
    'editorInlayHint.foreground': p.synFunction,
    'editorInlayHint.parameterBackground': alpha(p.accent, 0.08),
    'editorInlayHint.parameterForeground': p.synVariable,
    'editorInlayHint.typeBackground': alpha(p.accent, 0.08),
    'editorInlayHint.typeForeground': p.synType,

    // Sticky scroll
    'editorStickyScroll.background': p.bgElevated,
    'editorStickyScroll.border': p.border,
    'editorStickyScroll.shadow': alpha(k, 0.06),
    'editorStickyScrollHover.background': lighten(p.accent, 0.9),

    // Command center
    'commandCenter.background': p.bgOverlay,
    'commandCenter.foreground': p.fg,
    'commandCenter.border': p.border,
    'commandCenter.activeBackground': lighten(p.accent, 0.85),
    'commandCenter.activeForeground': p.fg,
    'commandCenter.inactiveForeground': p.fgSubtle,
    'commandCenter.debuggingBackground': alpha(p.conflict, 0.2),

    // Testing UI
    'testing.iconFailed': p.error,
    'testing.iconPassed': p.success,
    'testing.iconErrored': p.error,
    'testing.iconSkipped': p.fgSubtle,
    'testing.iconQueued': p.warning,
    'testing.runAction': p.success,

    // Chat / inline chat
    'chat.requestBackground': p.bgElevated,
    'chat.requestBorder': p.border,
    'chat.slashCommandBackground': lighten(p.accent, 0.85),
    'chat.slashCommandForeground': p.fg,
    'chat.avatarBackground': darken(p.bgElevated, 0.06),
    'chat.avatarForeground': p.fg,
    'chat.linesAddedForeground': p.success,
    'chat.linesRemovedForeground': p.error,
    'chat.editedFileForeground': darken(p.warning, 0.05),
    'inlineChat.background': p.bgElevated,
    'inlineChat.foreground': p.fg,
    'inlineChat.border': p.border,
    'inlineChatInput.background': w,
    'inlineChatInput.border': p.border,
    'inlineChatInput.focusBorder': p.accent,
    'inlineChatInput.placeholderForeground': p.fgFaint,

    // Interactive editor
    'interactive.activeCodeBorder': p.accent,
    'interactive.inactiveCodeBorder': p.border,

    // Symbol icons
    'symbolIcon.classForeground': p.synType,
    'symbolIcon.interfaceForeground': p.synType,
    'symbolIcon.methodForeground': p.synFunction,
    'symbolIcon.functionForeground': p.synFunction,
    'symbolIcon.propertyForeground': p.synProperty,
    'symbolIcon.variableForeground': p.synVariable,
    'symbolIcon.constantForeground': p.synConstant,
    'symbolIcon.keywordForeground': p.synKeyword,
    'symbolIcon.stringForeground': p.synString,

    // Toolbar
    'toolbar.hoverBackground': alpha(k, 0.05),
    'toolbar.activeBackground': alpha(k, 0.09),

    // Quick input
    'quickInput.background': p.bgElevated,
    'quickInput.foreground': p.fg,
    'quickInputList.focusBackground': p.bgSelection,
    'quickInputList.focusForeground': p.fg,

    // Keybinding label
    'keybindingLabel.background': p.bgElevated,
    'keybindingLabel.foreground': p.fg,
    'keybindingLabel.border': p.border,
    'keybindingLabel.bottomBorder': p.border,

    // SCM graph
    'scmGraph.foreground1': p.synFunction,
    'scmGraph.foreground2': p.synKeyword,
    'scmGraph.foreground3': p.synConstant,
    'scmGraph.foreground4': darken(p.warning, 0.05),
    'scmGraph.foreground5': p.synVariable
  }
}
