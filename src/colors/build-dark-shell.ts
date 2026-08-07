import { alpha, lighten } from '../palette'
import { ColorDefinitions, Palette } from '@/src/types'

/**
 * Builds the full UI color map for a dark-shell variant (Dark, Golden).
 *
 * Both variants share one near-black shell and differ only where palette roles
 * differ — the accent (white vs gold) and the syntax spectrum. Driving both from
 * a single factory is what guarantees a meaning resolves to one value: there is
 * no second place for "error red" or "the accent" to drift out of sync.
 *
 * Two bases recur below:
 *  - `w` (#ffffff): the neutral max-contrast white used for bright label text
 *    and for every translucent highlight/glow. This is intentionally NOT the
 *    accent — hovers and active-selection washes stay neutral in both variants,
 *    so Golden's gold shows up as deliberate accent, not muddy warm haze.
 *  - `p.accent`: reserved for fills and accent marks (buttons, badges, progress,
 *    active borders, links). In Dark this is also white, so Dark is unchanged;
 *    in Golden it turns those specific surfaces gold, giving the variant a real
 *    identity instead of being a near-clone of Dark.
 */
export function buildDarkShellColors(p: Palette): ColorDefinitions {
  const w = '#ffffff'

  // Structural neutral greys, derived from the canvas so they track `bg`.
  const lineFaint = lighten(p.bg, 0.1) // subtle borders (~#282828)
  const indent = lighten(p.bg, 0.2) // indent guides (~#404040)
  const indentActive = lighten(p.bg, 0.38) // active indent guide (~#707070)
  const ruler = lighten(p.bg, 0.29) // editor ruler (~#5a5a5a)

  // Palette-tinted surfaces for merge/peek/diff regions, mixed on the canvas so
  // they follow the variant (cool purple in Dark, warm amber in Golden).
  const peekBg = alpha(p.diffRemoved, 0.12)
  const peekGutter = alpha(p.diffRemoved, 0.18)

  return {
    foreground: p.fgSubtle,
    focusBorder: alpha(w, 0.04),
    'selection.background': p.bgSelection,
    'scrollbar.shadow': alpha(w, 0),

    // Activity bar
    'activityBar.foreground': w,
    'activityBar.background': p.bgElevated,
    'activityBar.inactiveForeground': alpha(w, 0.19),
    'activityBarBadge.foreground': p.accentContrast,
    'activityBarBadge.background': p.accent,
    'activityBar.border': alpha(w, 0),
    'activityBar.activeBackground': alpha(w, 0),

    // Side bar
    'sideBar.background': p.bgElevated,
    'sideBar.foreground': p.fg,
    'sideBarSectionHeader.background': alpha(w, 0.008),
    'sideBarSectionHeader.foreground': p.fgMuted,
    'sideBarSectionHeader.border': alpha(w, 0),
    'sideBarTitle.foreground': w,
    'sideBar.border': alpha(w, 0),
    'sideBar.dropBackground': alpha(w, 0.024),

    // Lists & trees
    'list.inactiveSelectionBackground': alpha(w, 0.024),
    'list.inactiveSelectionForeground': w,
    'list.hoverBackground': alpha(w, 0.047),
    'list.hoverForeground': w,
    'list.activeSelectionBackground': alpha(w, 0.059),
    'list.activeSelectionForeground': w,
    'tree.indentGuidesStroke': lighten(p.bg, 0.13),
    'list.dropBackground': alpha(w, 0.024),
    'list.highlightForeground': w,
    'list.focusBackground': alpha(w, 0.024),
    'list.focusForeground': p.fgMuted,
    'listFilterWidget.background': p.bgOverlay,
    'listFilterWidget.outline': alpha(w, 0),
    'listFilterWidget.noMatchesOutline': p.error,

    // Status bar
    'statusBar.foreground': p.fgMuted,
    'statusBar.background': p.bgElevated,
    'statusBarItem.hoverBackground': alpha(w, 0.12),
    'statusBarItem.activeBackground': alpha(w, 0.15),
    'statusBar.debuggingBackground': p.conflict,
    'statusBar.debuggingForeground': w,
    'statusBar.noFolderBackground': p.bgElevated,
    'statusBar.noFolderForeground': w,
    'statusBarItem.remoteBackground': p.accent,
    'statusBarItem.remoteForeground': p.accentContrast,
    'statusBarItem.errorBackground': p.error,
    'statusBarItem.errorForeground': w,
    'statusBarItem.warningBackground': p.warning,
    'statusBarItem.warningForeground': p.accentContrast,

    // Title bar
    'titleBar.activeBackground': p.bgElevated,
    'titleBar.activeForeground': p.fgMuted,
    'titleBar.inactiveBackground': p.bgElevated,
    'titleBar.inactiveForeground': alpha(p.fgFaint, 0.6),
    'titleBar.border': alpha(w, 0),

    // Menus
    'menubar.selectionForeground': p.fgMuted,
    'menubar.selectionBackground': alpha(w, 0.1),
    'menu.foreground': p.fgMuted,
    'menu.background': p.bgOverlay,
    'menu.selectionForeground': w,
    'menu.selectionBackground': alpha(w, 0.055),
    'menu.selectionBorder': alpha(w, 0),
    'menu.separatorBackground': alpha(w, 0.055),
    'menu.border': alpha(w, 0),

    // Buttons
    'button.background': p.accent,
    'button.foreground': p.accentContrast,
    'button.hoverBackground': lighten(p.accent, 0.12),
    'button.secondaryForeground': w,
    'button.secondaryBackground': lighten(p.bg, 0.24),
    'button.secondaryHoverBackground': lighten(p.bg, 0.31),

    // Inputs
    'input.background': p.bgOverlay,
    'input.border': alpha(w, 0),
    'input.foreground': p.fgMuted,
    'inputOption.activeBackground': p.accent,
    'inputOption.activeBorder': alpha(p.accent, 0),
    'inputOption.activeForeground': p.accentContrast,
    'input.placeholderForeground': p.fgSubtle,
    'inputValidation.errorBackground': p.error,
    'inputValidation.errorBorder': p.error,
    'inputValidation.warningBackground': p.warning,
    'inputValidation.warningForeground': p.accentContrast,
    'inputValidation.infoBackground': p.info,

    // Links
    'textLink.foreground': p.accent,
    'textLink.activeForeground': lighten(p.accent, 0.15),

    // Editor core
    'editor.background': p.bg,
    'editor.foreground': p.fg,
    'editorLineNumber.foreground': p.fgFaint,
    'editorLineNumber.activeForeground': p.fg,
    'editorLineNumber.dimmedForeground': alpha(p.fgFaint, 0.5),
    'editorCursor.foreground': p.fg,
    'editorCursor.background': p.bg,
    'editorMultiCursor.primary.foreground': p.fg,
    'editorMultiCursor.secondary.foreground': p.accent,
    'editor.selectionBackground': p.bgSelection,
    'editor.inactiveSelectionBackground': lighten(p.bg, 0.18),
    'editorWhitespace.foreground': alpha('#8c8c8c', 0.16),
    'editor.selectionHighlightBackground': alpha(w, 0.15),
    'editor.selectionHighlightBorder': alpha(w, 0.27),
    'editor.findMatchBackground': alpha(p.accent, 0.19),
    'editor.findMatchBorder': alpha(p.accent, 0.45),
    'editor.findMatchHighlightBackground': alpha(w, 0.12),
    'editor.findMatchHighlightBorder': alpha(w, 0),
    'editor.findRangeHighlightBackground': alpha('#3a3d41', 0.4),
    'editor.findRangeHighlightBorder': alpha(w, 0),
    'editor.rangeHighlightBackground': alpha(w, 0.043),
    'editor.rangeHighlightBorder': alpha(w, 0),
    'editor.hoverHighlightBackground': alpha(w, 0.25),
    'editor.wordHighlightStrongBackground': alpha(p.synString, 0.2),
    'editor.wordHighlightBackground': alpha('#575757', 0.72),
    'editor.lineHighlightBackground': alpha(w, 0.04),
    'editor.lineHighlightBorder': lineFaint,
    'editorLink.activeForeground': p.accent,
    'editorIndentGuide.background': indent,
    'editorIndentGuide.activeBackground': indentActive,
    'editorRuler.foreground': ruler,
    'editorBracketMatch.background': alpha(p.success, 0.1),
    'editorBracketMatch.border': lighten(p.bg, 0.47),
    'editor.foldBackground': alpha(p.synString, 0.3),
    'editorGhostText.foreground': alpha(p.fg, 0.4),
    'editorGhostText.background': alpha(w, 0),
    'editorGhostText.border': alpha(w, 0),

    // Editor overview ruler & diagnostics
    'editorOverviewRuler.background': alpha(p.bg, 0),
    'editorOverviewRuler.border': alpha('#7f7f7f', 0.3),
    'editorError.foreground': p.error,
    'editorError.background': alpha(p.error, 0),
    'editorError.border': alpha(w, 0),
    'editorWarning.foreground': p.warning,
    'editorWarning.background': alpha(p.warning, 0),
    'editorWarning.border': alpha(w, 0),
    'editorInfo.foreground': p.info,
    'editorInfo.background': alpha(p.info, 0),
    'editorInfo.border': alpha(p.info, 0),
    'editorHint.foreground': p.fgSubtle,

    // Gutter
    'editorGutter.background': p.bg,
    'editorGutter.modifiedBackground': p.warning,
    'editorGutter.addedBackground': p.success,
    'editorGutter.deletedBackground': p.error,
    'editorGutter.foldingControlForeground': p.fgSubtle,
    'editorGutter.commentRangeForeground': p.fgSubtle,
    'editorCodeLens.foreground': alpha(p.fg, 0.6),
    'editorGroup.border': alpha(w, 0),

    // Diff editor
    'diffEditor.insertedTextBackground': alpha(p.diffAdded, 0.1),
    'diffEditor.removedTextBackground': alpha(p.diffRemoved, 0.1),
    'diffEditor.insertedLineBackground': alpha(p.diffAdded, 0.06),
    'diffEditor.removedLineBackground': alpha(p.diffRemoved, 0.06),
    'diffEditor.border': lighten(p.bg, 0.21),
    'multiDiffEditor.headerBackground': p.bgOverlay,
    'multiDiffEditor.background': p.bg,
    'multiDiffEditor.border': lineFaint,

    // Panel
    'panel.background': p.bg,
    'panel.border': alpha(w, 0),
    'panelSection.border': alpha('#808080', 0.35),
    'panelTitle.activeBorder': p.accent,
    'panelTitle.activeForeground': w,
    'panelTitle.inactiveForeground': alpha(w, 0.6),

    // Badge
    'badge.background': p.accent,
    'badge.foreground': p.accentContrast,
    'profileBadge.background': lighten(p.bg, 0.24),
    'profileBadge.foreground': w,

    // Terminal
    'terminal.foreground': p.fgMuted,
    'terminal.selectionBackground': alpha(w, 0.25),
    'terminalCursor.background': p.bg,
    'terminalCursor.foreground': p.accent,
    'terminal.border': alpha('#808080', 0.35),
    'terminal.ansiBlack': p.ansiBlack,
    'terminal.ansiRed': p.ansiRed,
    'terminal.ansiGreen': p.ansiGreen,
    'terminal.ansiYellow': p.ansiYellow,
    'terminal.ansiBlue': p.ansiBlue,
    'terminal.ansiMagenta': p.ansiMagenta,
    'terminal.ansiCyan': p.ansiCyan,
    'terminal.ansiWhite': p.ansiWhite,
    'terminal.ansiBrightBlack': lighten(p.ansiBlack, 0.25),
    'terminal.ansiBrightRed': lighten(p.ansiRed, 0.15),
    'terminal.ansiBrightGreen': lighten(p.ansiGreen, 0.15),
    'terminal.ansiBrightYellow': lighten(p.ansiYellow, 0.15),
    'terminal.ansiBrightBlue': lighten(p.ansiBlue, 0.15),
    'terminal.ansiBrightMagenta': lighten(p.ansiMagenta, 0.15),
    'terminal.ansiBrightCyan': lighten(p.ansiCyan, 0.15),
    'terminal.ansiBrightWhite': w,
    'terminalCommandDecoration.defaultBackground': p.fgFaint,
    'terminalCommandDecoration.successBackground': p.success,
    'terminalCommandDecoration.errorBackground': p.error,
    'terminalStickyScroll.background': p.bg,
    'terminalStickyScroll.border': lineFaint,
    'terminalStickyScrollHover.background': lighten(p.bg, 0.11),
    'terminalOverviewRuler.cursorForeground': p.accent,
    'terminalOverviewRuler.findMatchForeground': p.accent,
    'terminalOverviewRuler.border': alpha('#7f7f7f', 0.3),

    // Breadcrumbs
    'breadcrumb.background': p.bg,
    'breadcrumb.foreground': p.fgMuted,
    'breadcrumb.focusForeground': w,
    'breadcrumb.activeSelectionForeground': w,

    // Editor group & tabs
    'editorGroupHeader.border': alpha(w, 0),
    'editorGroupHeader.tabsBackground': p.bgElevated,
    'editorGroupHeader.tabsBorder': alpha(w, 0),
    'editorGroup.emptyBackground': p.bg,
    'tab.activeForeground': w,
    'tab.border': alpha(w, 0),
    'tab.activeBackground': p.bg,
    'tab.activeBorder': alpha(w, 0),
    'tab.activeBorderTop': p.accent,
    'tab.inactiveBackground': p.bgElevated,
    'tab.inactiveForeground': alpha(w, 0.27),
    'tab.hoverBackground': p.bg,
    'tab.hoverForeground': w,
    'tab.selectedBackground': p.bg,
    'tab.selectedForeground': w,
    'tab.selectedBorderTop': p.accent,
    'tab.dragAndDropBorder': p.accent,
    'tab.lastPinnedBorder': lineFaint,
    'tab.unfocusedActiveForeground': alpha(w, 0.6),
    'tab.unfocusedInactiveForeground': alpha(w, 0.2),
    'tab.activeModifiedBorder': p.warning,
    'tab.inactiveModifiedBorder': alpha(p.warning, 0.5),

    // Scrollbar
    'scrollbarSlider.background': alpha('#797979', 0.19),
    'scrollbarSlider.hoverBackground': alpha('#797979', 0.31),
    'scrollbarSlider.activeBackground': alpha('#bfbfbf', 0.4),

    // Progress
    'progressBar.background': p.accent,

    // Widgets
    'widget.shadow': alpha('#000000', 0.36),
    'widget.border': lineFaint,
    'editorWidget.foreground': p.fgMuted,
    'editorWidget.background': p.bgFloating,
    'editorWidget.border': lineFaint,
    'editorWidget.resizeBorder': p.accent,
    'pickerGroup.border': alpha(w, 0),
    'pickerGroup.foreground': w,
    'debugToolBar.background': p.bgFloating,
    'debugToolBar.border': p.bgFloating,

    // Notifications
    'notifications.foreground': p.fgMuted,
    'notifications.background': p.bgFloating,
    'notifications.border': lighten(p.bg, 0.19),
    'notificationToast.border': lighten(p.bg, 0.19),
    'notificationsErrorIcon.foreground': p.error,
    'notificationsWarningIcon.foreground': p.warning,
    'notificationsInfoIcon.foreground': p.info,
    'notificationCenter.border': lighten(p.bg, 0.19),
    'notificationCenterHeader.foreground': w,
    'notificationCenterHeader.background': lighten(p.bg, 0.19),

    // Git decorations
    'gitDecoration.addedResourceForeground': p.success,
    'gitDecoration.modifiedResourceForeground': p.warning,
    'gitDecoration.deletedResourceForeground': p.error,
    'gitDecoration.untrackedResourceForeground': p.success,
    'gitDecoration.conflictingResourceForeground': p.conflict,
    'gitDecoration.ignoredResourceForeground': p.fgFaint,
    'gitDecoration.stageDeletedResourceForeground': p.error,
    'gitDecoration.stageModifiedResourceForeground': p.warning,
    'gitDecoration.submoduleResourceForeground': p.info,

    // Marker navigation
    'editorMarkerNavigation.background': lighten(p.bg, 0.11),
    'editorMarkerNavigationError.background': p.error,
    'editorMarkerNavigationWarning.background': p.warning,
    'editorMarkerNavigationInfo.background': p.info,

    // Merge conflicts (palette-tinted surfaces)
    'merge.currentHeaderBackground': alpha(p.info, 0.4),
    'merge.currentContentBackground': alpha(p.info, 0.2),
    'merge.incomingHeaderBackground': alpha(p.diffRemoved, 0.4),
    'merge.incomingContentBackground': alpha(p.diffRemoved, 0.2),
    'merge.commonHeaderBackground': lighten(p.bg, 0.16),
    'merge.commonContentBackground': lighten(p.bg, 0.09),

    // Suggest widget
    'editorSuggestWidget.background': p.bgFloating,
    'editorSuggestWidget.border': p.bgFloating,
    'editorSuggestWidget.foreground': p.fgMuted,
    'editorSuggestWidget.highlightForeground': p.accent,
    'editorSuggestWidget.selectedBackground': alpha(w, 0.08),
    'editorSuggestWidget.focusHighlightForeground': p.accent,

    // Hover widget
    'editorHoverWidget.foreground': p.fgMuted,
    'editorHoverWidget.background': p.bgFloating,
    'editorHoverWidget.border': lighten(p.bg, 0.27),

    // Peek view (palette-tinted)
    'peekView.border': alpha(p.diffRemoved, 0.3),
    'peekViewEditor.background': peekBg,
    'peekViewEditorGutter.background': peekGutter,
    'peekViewEditor.matchHighlightBackground': alpha(p.info, 0.25),
    'peekViewEditor.matchHighlightBorder': p.info,
    'peekViewResult.background': lighten(p.bg, 0.09),
    'peekViewResult.fileForeground': w,
    'peekViewResult.lineForeground': p.fg,
    'peekViewResult.matchHighlightBackground': alpha(p.info, 0.25),
    'peekViewResult.selectionBackground': alpha(w, 0.08),
    'peekViewResult.selectionForeground': w,
    'peekViewTitle.background': lighten(p.bg, 0.09),
    'peekViewTitleDescription.foreground': alpha(p.fgMuted, 0.7),
    'peekViewTitleLabel.foreground': w,

    // Icons, checkboxes, dropdowns, radios
    'icon.foreground': p.fgSubtle,
    'checkbox.background': p.bgOverlay,
    'checkbox.foreground': p.fgMuted,
    'checkbox.border': alpha(w, 0),
    'dropdown.background': p.bgOverlay,
    'dropdown.foreground': p.fgMuted,
    'dropdown.border': alpha(w, 0),
    'radio.activeForeground': p.accent,
    'radio.activeBorder': p.accent,
    'radio.inactiveBorder': alpha(w, 0.19),

    // Minimap
    'minimap.background': p.bg,
    'minimap.findMatchHighlight': alpha(p.accent, 0.19),
    'minimap.selectionHighlight': p.bgSelection,
    'minimap.errorHighlight': p.error,
    'minimap.warningHighlight': p.warning,
    'minimapGutter.addedBackground': p.success,
    'minimapGutter.modifiedBackground': p.warning,
    'minimapGutter.deletedBackground': p.error,

    // Settings
    'settings.headerForeground': p.fgSubtle,
    'settings.focusedRowBackground': alpha(w, 0.027),
    'settings.modifiedItemIndicator': p.warning,

    // Misc
    'walkThrough.embeddedEditorBackground': alpha('#000000', 0.31),
    'debugExceptionWidget.background': p.bgFloating,
    'debugExceptionWidget.border': p.bgFloating,

    // Inline suggestions and inlay hints
    'editor.inlineSuggest.background': alpha(w, 0),
    'editor.inlineSuggest.foreground': alpha(p.fg, 0.4),
    'editorInlayHint.background': alpha(p.fg, 0),
    'editorInlayHint.foreground': p.fgFaint,
    'editorInlayHint.parameterBackground': alpha(p.fg, 0),
    'editorInlayHint.parameterForeground': p.fgFaint,
    'editorInlayHint.typeBackground': alpha(p.fg, 0),
    'editorInlayHint.typeForeground': p.fgFaint,

    // Sticky scroll
    'editorStickyScroll.background': p.bg,
    'editorStickyScroll.border': lineFaint,
    'editorStickyScroll.shadow': alpha('#000000', 0.24),
    'editorStickyScrollHover.background': lighten(p.bg, 0.11),

    // Command center
    'commandCenter.background': p.bgElevated,
    'commandCenter.foreground': p.fgMuted,
    'commandCenter.border': alpha(w, 0.06),
    'commandCenter.activeBackground': alpha(w, 0.08),
    'commandCenter.activeForeground': w,
    'commandCenter.inactiveForeground': alpha(p.fgMuted, 0.5),
    'commandCenter.debuggingBackground': alpha(p.conflict, 0.25),

    // Testing UI
    'testing.iconFailed': p.error,
    'testing.iconPassed': p.success,
    'testing.iconErrored': p.error,
    'testing.iconSkipped': p.fg,
    'testing.iconQueued': p.warning,
    'testing.runAction': p.success,

    // Chat / inline chat (Copilot & friends)
    'chat.requestBackground': p.bg,
    'chat.requestBorder': lineFaint,
    'chat.slashCommandBackground': lighten(p.bg, 0.11),
    'chat.slashCommandForeground': p.fgMuted,
    'chat.avatarBackground': lighten(p.bg, 0.11),
    'chat.avatarForeground': p.fg,
    'chat.linesAddedForeground': p.success,
    'chat.linesRemovedForeground': p.error,
    'chat.editedFileForeground': p.warning,
    'inlineChat.background': p.bgFloating,
    'inlineChat.foreground': p.fgMuted,
    'inlineChat.border': lighten(p.bg, 0.19),
    'inlineChatInput.background': p.bgOverlay,
    'inlineChatInput.border': lineFaint,
    'inlineChatInput.focusBorder': alpha(p.accent, 0.5),
    'inlineChatInput.placeholderForeground': p.fgSubtle,

    // Interactive editor
    'interactive.activeCodeBorder': p.accent,
    'interactive.inactiveCodeBorder': lighten(p.bg, 0.11),

    // Symbol icons — mapped to their syntax-role hues
    'symbolIcon.classForeground': p.synFunction,
    'symbolIcon.interfaceForeground': p.synFunction,
    'symbolIcon.methodForeground': p.synFunction,
    'symbolIcon.functionForeground': p.synFunction,
    'symbolIcon.propertyForeground': p.synProperty,
    'symbolIcon.variableForeground': p.synVariable,
    'symbolIcon.constantForeground': p.synConstant,
    'symbolIcon.enumeratorForeground': p.synConstant,
    'symbolIcon.keywordForeground': p.synKeyword,
    'symbolIcon.stringForeground': p.synString,
    'symbolIcon.colorForeground': p.accent,

    // Toolbar
    'toolbar.hoverBackground': alpha(w, 0.12),
    'toolbar.activeBackground': alpha(w, 0.19),

    // Quick input
    'quickInput.background': p.bg,
    'quickInput.foreground': p.fg,
    'quickInputList.focusBackground': lighten(p.bg, 0.11),
    'quickInputList.focusForeground': w,

    // Keybinding label
    'keybindingLabel.background': lighten(p.bg, 0.11),
    'keybindingLabel.foreground': p.fg,
    'keybindingLabel.border': alpha(w, 0.06),
    'keybindingLabel.bottomBorder': alpha(w, 0.06),

    // SCM graph
    'scmGraph.foreground1': p.synFunction,
    'scmGraph.foreground2': p.synKeyword,
    'scmGraph.foreground3': p.synConstant,
    'scmGraph.foreground4': p.warning,
    'scmGraph.foreground5': p.synVariable
  }
}
